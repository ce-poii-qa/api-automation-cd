describe('GET USERS', () => {
    it.only('create user test', () => {
            cy.request({
                method: 'GET',
                url: 'https://reqres.in/api/users?page=2',
    
            }).then((response)=>{
                cy.log(JSON.stringify(response))
                expect(response.status).to.eq(200)
                expect(response.body.page).to.eq(2)
                expect(response.body.total).to.eq(2)
            })
            
        
        
    })
   })