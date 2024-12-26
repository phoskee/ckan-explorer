import { apiGet } from "@/app/api/base";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CKANResponse } from "@/types/ckan";
import { ChartBarIcon, DatabaseIcon, TagIcon, UsersIcon } from "lucide-react";

export default async function Home() {
  const response = await apiGet('status_show');
  const stats = {
    organizations: { name: "Organizations", count: response.result.organization_count },
    groups: { name: "Groups", count: response.result.groups },
    packages: { name: "Packages", count: response.result.packages },
    tags: { name: "Tags", count: response.result.tags }
  };
  
  return (
    <div className="container-wrapper">
      <div className="container space-y-8 py-4">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">CKAN Explorer</h1>
          <p className="text-xl text-muted-foreground">
            Esplora e analizza i dati aperti della Pubblica Amministrazione italiana
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {Object.values(stats).map((stat) => {
            const totalCount = Object.values(stats).reduce((acc, curr) => acc + curr.count, 0);
            const percentage = (stat.count / totalCount) * 100;
            
            return (
              <Card key={stat.name}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    {stat.name}
                  </CardTitle>
                  {stat.name === "Organizations" && <UsersIcon className="h-4 w-4 text-muted-foreground" />}
                  {stat.name === "Groups" && <DatabaseIcon className="h-4 w-4 text-muted-foreground" />}
                  {stat.name === "Packages" && <ChartBarIcon className="h-4 w-4 text-muted-foreground" />}
                  {stat.name === "Tags" && <TagIcon className="h-4 w-4 text-muted-foreground" />}
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.count}</div>
                  <div className="flex items-center gap-2">
                    <Progress value={percentage} className="mt-2" />
                    <span className="text-xs text-muted-foreground">{percentage.toFixed(1)}%</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </section>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Informazioni sul Portale</CardTitle>
              <CardDescription>
                Panoramica delle funzionalità principali
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[200px] pr-4">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold">Esplora i Dataset</h3>
                    <p className="text-sm text-muted-foreground">
                      Accedi a migliaia di dataset pubblici in diversi formati, dalle statistiche ai dati geografici.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Organizzazioni</h3>
                    <p className="text-sm text-muted-foreground">
                      Scopri gli enti e le organizzazioni che pubblicano i dati.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Gruppi Tematici</h3>
                    <p className="text-sm text-muted-foreground">
                      Esplora i dati organizzati per aree tematiche.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Tag e Metadati</h3>
                    <p className="text-sm text-muted-foreground">
                      Utilizza tag e metadati per trovare rapidamente i dati di interesse.
                    </p>
                  </div>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Statistiche di Utilizzo</CardTitle>
              <CardDescription>
                Metriche e analisi dei dati disponibili
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[200px] pr-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Dataset Totali</p>
                      <p className="text-sm text-muted-foreground">
                        Numero di dataset pubblicati
                      </p>
                    </div>
                    <div className="font-bold">{stats.packages.count}</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Organizzazioni Attive</p>
                      <p className="text-sm text-muted-foreground">
                        Enti che pubblicano dati
                      </p>
                    </div>
                    <div className="font-bold">{stats.organizations.count}</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Gruppi Tematici</p>
                      <p className="text-sm text-muted-foreground">
                        Aree tematiche disponibili
                      </p>
                    </div>
                    <div className="font-bold">{stats.groups.count}</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Tag Utilizzati</p>
                      <p className="text-sm text-muted-foreground">
                        Parole chiave per la ricerca
                      </p>
                    </div>
                    <div className="font-bold">{stats.tags.count}</div>
                  </div>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
