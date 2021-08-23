# PappersApi.InlineResponse2005

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resultatsNomEntreprise** | **[Object]** | Liste des entreprises dont le nom (dénomination ou nom/prénom) peut compléter la recherche textuelle. Uniquement présent si le paramètre &#x60;cibles&#x60; contient &#x60;nom_entreprise&#x60;. | [optional] 
**resultatsDenomination** | **[Object]** | Liste des entreprises dont la dénomination peut compléter la recherche textuelle (concerne les personnes morales seulement). Uniquement présent si le paramètre &#x60;cibles&#x60; contient &#x60;denomination&#x60;. | [optional] 
**resultatsNomComplet** | **[Object]** | Liste des entreprises dont le nom complet (nom + prénom ou prénom + nom) peut compléter la recherche textuelle (concerne les personnes physiques seulement). Uniquement présent si le paramètre &#x60;cibles&#x60; contient &#x60;nom_complet&#x60;. | [optional] 
**resultatsRepresentant** | **[Object]** | Liste des représentants dont le nom complet (nom + prénom ou prénom + nom) peut compléter la recherche textuelle. Uniquement présent si le paramètre &#x60;cibles&#x60; contient &#x60;representant&#x60;. | [optional] 
**resultatsSiren** | **[Object]** | Liste des entreprises dont le numéro SIREN peut compléter la recherche textuelle. Uniquement présent si le paramètre &#x60;cibles&#x60; contient &#x60;siren&#x60;. | [optional] 
**resultatsSiret** | **[Object]** | Liste des entreprises dont le numéro SIRET peut compléter la recherche textuelle. Uniquement présent si le paramètre &#x60;cibles&#x60; contient &#x60;siret&#x60;. | [optional] 


