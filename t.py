matriz = [[10,22,36],[45,50,6],[7,8,9,100]]

maior = matriz[0][0]
for linha in matriz:
    maior = max(linha)

print(maior)