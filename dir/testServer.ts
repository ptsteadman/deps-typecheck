import express from 'express';
// import { ParamsDictionary } from 'express-serve-static-core';
import * as Sentry from '@sentry/node';
import { Tracer } from 'opentracing';

export default function opentracingSentryMiddleware(
    _tracer: Tracer,
): (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => void {
    return (
        req: express.Request,
        _res: express.Response,
        next: express.NextFunction,
    ) => {
        const span = req.span;

        if (span !== undefined) {
            Sentry.configureScope(function (scope) {
                scope.setExtra('trace_id', span.context().toTraceId());
                next();
            });
        } else {
            next();
        }
    };
}
