var frisby = require('frisby');
var url = 'http://localhost:3000/';
  // when testing a REST api you should follow this order:
  // create
  // ready
  // update
  // destroy
  // by doing so you remove the ability for another party to modify your test data
  // since you create the data yourself


  frisby.create('Create an entry via POST')
    .post(url + 'characters', {
      name: 'Testy McTestingson',
      planet: 'Laser Moon'
    })
    // 'afterJSON' automatically parses response body as JSON and passes it as an argument
    .afterJSON(function(character) {

      var characterId = character['_id'];

      describe('a restful controller', function() {

        it('can create a new entry on the API', function() {

          expect(character.hasOwnProperty('name')).toBe(true);
          expect(character.hasOwnProperty('planet')).toBe(true);
          expect(character.hasOwnProperty('forceUser')).toBe(true);

          expect(character['name']).toEqual('Testy McTestingson');
          expect(character['planet']).toEqual('Laser Moon');
          expect(character['forceUser']).toEqual(false);

        });

        it('can update an entry on the API', function() {

          frisby.create('Update character')
            .put(url + 'characters/' + characterId, { forceUser: true })
            .expectStatus(200)
            .afterJSON(function(json) {


              expect(json.hasOwnProperty('_id')).toBe(true);

              expect(json['_id']).toEqual(characterId);

            })
          .toss();

        });

        it('can get an entry it created from the API', function() {

          frisby.create('Get')
            .get(url + 'characters/' + characterId)
            .expectStatus(200)
            .afterJSON(function(json) {

              expect(json.hasOwnProperty('forceUser')).toBe(true);
              expect(json.hasOwnProperty('_id')).toBe(true);

              expect(json['name']).toEqual('Testy McTestingson');
              expect(json['planet']).toEqual('Laser Moon');
              expect(json['forceUser']).toEqual(true);
              expect(json['_id']).toEqual(characterId);


            })
          .toss();

        });

        it('can delete an entry it created from the API', function() {

          frisby.create('Get')
            .delete(url + 'characters/' + characterId)
            .expectStatus(200)
          .toss();

        });



      });

    })
  .toss();
