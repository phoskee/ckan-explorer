import { getHelp } from "@/actions/api";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default async function HelpPage({
  searchParams,
}: {
  searchParams: { url: string };
}) {
  const urlParams = new URL(searchParams.url);
  const name = urlParams.searchParams.get("name");

  let helpData;
  try {
    helpData = await getHelp({ url: searchParams.url });
  } catch (error) {
    helpData = {
      success: false,
      result:
        error instanceof Error
          ? error.message
          : "Error loading help documentation",
    };
  }

  return (
    <div className="container">
      <Card>
        <CardHeader>
          <CardTitle>Help Documentation for {name || "Unknown"}</CardTitle>
        </CardHeader>
        <CardContent>
          {helpData.success ? (
            <pre className="whitespace-pre-wrap">{helpData.result}</pre>
          ) : (
            <div className="text-red-500">Error loading help documentation</div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
