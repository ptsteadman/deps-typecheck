
// Extend the Request type in Express to include the Span
import { Span } from 'opentracing';

declare global {
    namespace Express {
        export interface Request {
            span?: Span;
        }
    }
}
