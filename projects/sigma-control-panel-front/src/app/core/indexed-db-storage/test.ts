import { openDB, DBSchema } from 'idb';

interface ControlPanelDB extends DBSchema {
  addressUsageType: {
    value: {
      id: string;
      code: string;
      label: string;
      description: string;
    };
    key: string;
    indexes: { 'by-code': number };
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
