import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import * as api from "@/actions/api";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default async function GroupPage() {
  const response = await api.getGroupList({
    include_users: true,
    include_tags: true,
    include_groups: true,
    include_extras: true,
    include_dataset_count: true,
  });

  return (
    <div className="container flex flex-col gap-2">
      <Card>
        <CardHeader>
          <CardTitle>Response <Badge className={`text-xs ${response.success ? "bg-green-500" : ""}`} variant={response.success ? "default" : "destructive"}>{response.success ? "ok" : "error"}</Badge></CardTitle>
        </CardHeader>
        <CardContent> 
          <Link href={`/help?url=${encodeURIComponent(response.help)}`} target="_blank">
            Get help with this function
          </Link>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Groups</CardTitle>
        </CardHeader>
        <CardContent>
          
          <div className="flex flex-wrap gap-2">
            {response.result.map((group: string, index: number) => (
              <Link href={`/group/${group}`} key={index}><Button variant="outline" className="text-xs">
                {group}
              </Button></Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
