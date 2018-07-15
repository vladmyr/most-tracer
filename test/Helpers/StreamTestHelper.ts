import { Stream, empty } from "most";

type TResolutionCriteriaTake = {
    take: number
}

type TResolutionCriteriaMs = {
    ms: number
}

type TResolutionCriteria = TResolutionCriteriaTake | TResolutionCriteriaMs;

class StreamTestHelper {
    private static _CollectAndResolve<T>(
        resolve: typeof Promise.resolve, 
        criteria: TResolutionCriteria
    ) {
        const collected: Array<T> = [];

        // of type TResolutionCriteriaMs
        if (criteria.hasOwnProperty("ms")) {
            setTimeout(resolve, (<TResolutionCriteriaMs>criteria).ms, collected);
        }

        return (x: T) => {
            collected.push(x);

            // of type TResolutionCriteriaTake
            if (
                criteria.hasOwnProperty("take") && (<TResolutionCriteriaTake>criteria).take == collected.length
            ) {
                resolve(collected);
            }
        }
    }
    public static Collect<T>(
        stream: Stream<T>, 
        criteria: TResolutionCriteria = { take: 1 }
    ): Promise<Array<T>> {
        return new Promise((resolve, reject) => {
            stream.recoverWith(e => { 
                reject(e); 
                return empty(); 
            });
            stream.observe(this._CollectAndResolve(resolve as any, criteria));
        })
    }
}

export default StreamTestHelper;