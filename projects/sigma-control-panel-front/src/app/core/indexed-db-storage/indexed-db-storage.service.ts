import { Injectable } from '@angular/core';
import { openDB, deleteDB, wrap, unwrap, DBSchema } from 'idb';
import { Observable, Subject } from 'rxjs';
import { AddressUsageType } from '../../features/panel/models/address-usage-type.model';

interface ControlPanelDB extends DBSchema {
  addressUsageType: {
    value: {
      id: string;
      code: string;
      label: string;
      description: string;
    },
    key: string;
    indexes: { 'by-code': string }
  };
}


async function createDb() {
  const db = await openDB<ControlPanelDB>('control-panel-db', 1, {
    // eslint-disable-next-line no-shadow
    upgrade(db) {
      // db.createObjectStore('favourite-number');

      const addressUsageTypeStroe = db.createObjectStore('addressUsageType', {
        keyPath: 'code',
      });
      addressUsageTypeStroe.createIndex('by-code', 'code');
    },
  });

}

@Injectable({
  providedIn: 'root'
})
export class IndexedDbStorageService {
  private _addressUsageDataChange: Subject<AddressUsageType> = new Subject<AddressUsageType>();
  private _dbPromise;

  constructor() { }

  public connectToDb() {
    const _dbPromise = openDB('control-panel', 1, {
      upgrade(db) {
        db.createObjectStore('address-usage-types');

      },
    });

  }



}
