export async function onRequest(context: any) {
    const {
        request,
        env,
        params,
        // waitUntil,
        // next,
        data
    } = context;

    console.log("env"+env)
    console.log("data"+data)
    console.log("request"+request)
    console.log("params"+params)
}
