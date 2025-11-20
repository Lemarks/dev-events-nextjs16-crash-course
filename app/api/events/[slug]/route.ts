import {NextRequest, NextResponse} from 'next/server';
import connectDB from '@/lib/mongodb';
import {Event} from '@/database';

interface RouteParams {
    params: Promise<{
        slug: string;
    }>;
}

/**
 * GET /api/events/[slug]
 * Fetches a single events by its slug
 */
export async function GET(
    request: NextRequest,
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

        // Query events by slug
        const event = await Event.findOne({slug: sanitizedSlug}).lean();

        // Handle events not found
        if (!event) {
            return NextResponse.json(
                {error: `Event with slug "${sanitizedSlug}" not found`},
                {status: 404}
            );
        }

        // Return events data
        return NextResponse.json(
            {
                success: true,
                data: event,
            },
            {status: 200}
        );
    } catch (error) {
        // Log error for debugging (use proper logging service in production)
        console.error('Error fetching events by slug:', error);

        // Handle unexpected errors
        return NextResponse.json(
            {
                error: 'An unexpected error occurred while fetching the events',
                message: error instanceof Error ? error.message : 'Unknown error',
            },
            {status: 500}
        );
    }
}
