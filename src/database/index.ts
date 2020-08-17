import { createConnection } from 'typeorm';

/**
 * Procura em todo o path do projeto por um arquivo ormconfig.json e aplica tudo o que tiver nele
 * Passamos todas as variaveis pelo ormconfig por a CLI do typeorm (yarn typeorm) também utiliza do mesmo arquivo
 * o que deixa tudo mais fácil e padronizado, porém ainda sim poderiamos passar as variaveis do banco direto para
 * o createConnection
 */
createConnection();
