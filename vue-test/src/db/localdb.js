import Dexie from 'dexie'

const localdb=new Dexie("localdb")

localdb.version(1).stores({
  product:'code,name'
})

export default localdb