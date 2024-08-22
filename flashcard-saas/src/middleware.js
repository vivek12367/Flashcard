// middleware.js or middleware.ts
import { clerkMiddleware } from '@clerk/nextjs';

// Use the middleware
export default clerkMiddleware();

// Optionally, configure the matcher to specify which routes this middleware applies to
export const config = {
    matcher: ['/protected/(.*)', '/api/(.*)'], // Adjust this to match your protected routes
};
