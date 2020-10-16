const Database = require('./db');

const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {

    // inserir dados na tabela 
   /* await saveOrphanage(db, {
        lat: "-27.221936",
        lng: "-49.6594463",
        name: "Lar das Meninas", 
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "1954815352",
        images: [
            "https://images.unsplash.com/photo-1601113354478-63d44742f572?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max", 
            "https://images.unsplash.com/photo-1573261524391-266433971be1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),

        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "1"
    })
*/

    
    //consultar somente 1 orfanato pelo id
   // const orphanages = await db.all('SELECT * FROM orphanages WHERE id = "1" ')
    //console.log(orphanages)

    
/*
   // remover dados
    
    console.log(await db.run('DELETE FROM orphanages WHERE id = "3" '))

     // consultar dados da tabela
     const selectedOrphanages = await db.all("SELECT * FROM orphanages")
     console.log(selectedOrphanages)
    */

})