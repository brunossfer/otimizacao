set Itens;
param custo{i in Itens};
param lucro{i in Itens};
 
var adicionado{i in Itens}, integer, >=0, <=1;
knap_custoTempo : sum{i in Itens} adicionado[i] * custo[i] <= 450;
maximize knap_lucro: sum{i in Itens} adicionado[i] * lucro[i];

end;

\* Problem: exemplo mochila escrito po extenso

Maximize
 obj: + 150 a + 35 b + 200 c + 60 d + 60 e + 45 g + 60 h + 40 i + 30 j + 70 k + 10 l + 30 m + 15 n + 10 o + 40 p + 70 q + 75 r + 80 s + 20 t + 12 u + 50 v + 10 w 

Subject To
 size: + 9 a + 13 b + 153 c + 50 d + 15 e + 68 g + 27 h + 39 i + 23 j + 11 k + 52 l + 32 m + 24 n + 48 o + 73 p + 42 q + 43 r + 22 s + 7 t + 18 u + 4 v + 30 w <= 450

Bounds
 0 <= a <= 1
 0 <= b <= 1
 0 <= c <= 1
 0 <= d <= 1
 0 <= e <= 1
 0 <= f <= 1
 0 <= g <= 1
 0 <= h <= 1
 0 <= i <= 1
 0 <= j <= 1
 0 <= k <= 1
 0 <= l <= 1
 0 <= m <= 1
 0 <= n <= 1
 0 <= o <= 1
 0 <= p <= 1
 0 <= q <= 1
 0 <= r <= 1
 0 <= s <= 1
 0 <= t <= 1 
 0 <= u <= 1
 0 <= v <= 1
 0 <= w <= 1

Generals
 a
 b
 c
 d
 e
 f
 g
 h
 i
 j
 k
 l
 m
 n
 o
 p
 q
 r
 s
 t
 u
 v
 w

End
*\