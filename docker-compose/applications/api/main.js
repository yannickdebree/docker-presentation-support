import Koa from 'koa';
import cors from '@koa/cors'

function main() {
    const app = new Koa();

    app.use(cors());

    app.use(ctx => {
        ctx.body = { message: "Hello from API !" };
    })

    app.listen(3000, () => {
        console.log('API ready on port 3000');
    });
}

main();