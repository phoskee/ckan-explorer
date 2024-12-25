import * as api from "@/actions/api";
import { Button } from "@/components/ui/button";




export default async function Page() {
	
const response = await api.getShow({limit: 1, offset: 0});
	return (
    <div className="container">
      <h1>count: {response.result.length}</h1>
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
  );
}
