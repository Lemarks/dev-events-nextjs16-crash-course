import {NextRequest, NextResponse} from 'next/server';
import connectDB from '@/lib/mongodb';
import {Event} from '@/database';

type RouteParams = {
    params: Promise<{
        slug: string;
    }>;
};

/**
 * GET /api/events/[slug]
 * Fetches a single events by its slug
 */
export async function GET(
    req: NextRequest,
    {params}: RouteParams
): Promise<NextResponse> {
    try {
        // Await params (Next.js 15+ requires this)
        const {slug} = await params;

        // Validate slug parameter
        if (!slug || typeof slug !== 'string' || slug.trim() === '') {
            return NextResponse.json(
                {error: 'Slug parameter is required and must be a valid string'},
                {status: 400}
            );
        }

        // Sanitize slug (remove any potential malicious characters)
        const sanitizedSlug = slug.trim().toLowerCase();

        // Connect to database
        await connectDB();

        // Query event by slug
        const event = await Event.findOne({slug: sanitizedSlug}).lean();

        // Handle event not found
        if (!event) {
            return NextResponse.json(
                {message: `Event with slug "${sanitizedSlug}" not found`},
                {status: 404}
            );
        }

        // Return successful response with event data
        return NextResponse.json(
            {message: 'Event fetched successfully', event},
            {status: 200}
        );
    } catch (error) {
        // Log error for debugging (use proper logging service in production)
        console.error('Error fetching event by slug:', error);

        // Handle unexpected errors
        return NextResponse.json(
            {
                error: 'An unexpected error occurred while fetching the event',
                message: error instanceof Error ? error.message : 'Unknown error',
            },
            {status: 500}
        );
    }
}
