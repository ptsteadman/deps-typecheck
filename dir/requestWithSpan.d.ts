export {};

// Extend the Request type in Express to include the Span
declare global {
    namespace Express {
        export interface Request {
            foo?: string;
        }
    }
}
