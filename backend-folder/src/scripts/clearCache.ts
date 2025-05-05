import "dotenv/config";
import {Container} from "typedi";
import {promisify} from "util";
import {CacheClient, CACHE_CLIENT, createCacheClient} from "../cache/cacheConnection";

async function script() {
    await createCacheClient();
    const cacheClient: CacheClient = Container.get(CACHE_CLIENT);

    if (!cacheClient) {
        console.log("No cache set up");
        process.exit();
    }

    await promisify(cacheClient.flushdb).bind(cacheClient)();

    console.log("Cache cleared successfully");

    process.exit();
}

script().catch((error) => {
    console.log(error, "error");
});
