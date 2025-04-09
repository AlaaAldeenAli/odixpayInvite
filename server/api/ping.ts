import requestIp from 'request-ip';
export default defineEventHandler(async ({ req, res, context, event }) => {
    const clientIp = requestIp.getClientIp(req);
    return { address: clientIp }
})