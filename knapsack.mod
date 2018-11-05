set Itens;
param custoTempo{i in Itens};
param lucro{i in Itens};
 
var fazer{i in Itens}, integer, >=0, <=1;
 
knap_custoTempo : sum{i in Itens} fazer[i] * custoTempo[i] <= 450;
 
maximize knap_lucro: sum{i in Itens} fazer[i] * lucro[i];

end;