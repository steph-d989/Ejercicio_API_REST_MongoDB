db.providers.insertOne(
    {
        "company_name": "Las malcriadas de Roberto",
        "CIF": "A34562345",
        "address": "Su casa S/N",
        "url_web": "www.robertoysuschicas.com"
    }
);
db.providers.insertMany([
    {
        "company_name": "Los malandros de Luis",
        "CIF": "A357467435",
        "address": "C. la pandilla de Luis b-1",
        "url_web": "www.robertoysuschicas.com"
    },
    {
        "company_name": "Las peruanadas de Diego",
        "CIF": "A12987652",
        "address": "C. Peru S/N",
        "url_web": "www.diego-perucho.com"
    },
    {
        "company_name": "Emilio y sus Panchitas",
        "CIF": "A19834652",
        "address": "C. Peru S/N",
        "url_web": "www.emilio-panchilover.com"
    }
]);