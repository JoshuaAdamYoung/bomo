import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  data: Array<Object>;
  constructor() {
    this.data = [
      {
        text: 'Well, thats a first',
        // createdOn: new Date(2017, 08, 31, 15, 40, 2),
        createdBy: 'SomeGuy',
        comments: [
          {
            text: 'calling first is stupid',
            // createdOn: new Date(2017, 08, 31, 15, 43, 2),
            createdBy: 'SomeOtherGuy'
          }
        ],
        shares: [
          'NotJustSomeGuy'
        ]
      },
      {
        text: 'Woot, second',
        // createdOn: new Date(2017, 08, 31, 15, 41, 2),
        createdBy: 'SomeOtherGuy',
        comments: [
          {
            text: 'calling second is stupider',
           // createdOn: new Date(2017, 08, 31, 15, 44, 2),
            createdBy: 'SomeOtherGuy'
          }
        ],
        shares: [
          'NotJustSomeGuy'
        ]
      },
      {
        text: 'I\'ll share anything\!',
        // createdOn: new Date(2017, 08, 31, 15, 47, 2),
        createdBy: 'NotJustSomeGuy',
        comments: [
          {
            text: 'cool',
           // createdOn: new Date(2017, 08, 31, 15, 49, 2),
            createdBy: 'SomeGuy'
          }
        ],
        shares: [
          'NotJustSomeGuy'
        ]
      },
      {
        text: 'Does anyone have anything meaningful to say?',
        // createdOn: new Date(2017, 08, 31, 15, 53, 2),
        createdBy: 'Shitposter',
        comments: [
          {
            text: 'Wah',
           // createdOn: new Date(2017, 08, 31, 16, 12, 2),
            createdBy: 'Antagonotron'
          }
        ],
        shares: [
          'NotJustSomeGuy'
        ]
      }
    ]
  }

  getData(){
    return this.data
  }

}
