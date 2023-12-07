export async function onRequest(context: any) {
    const {
        request,
        env,
        params,
        waitUntil,
        next,
        data
    } = context;

    console.log(env)
}
