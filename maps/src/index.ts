import { Company } from './Company';
import { User } from './User'
import { CustomMap } from "./CustomMap";

const divId = 'map'

const customMap = new CustomMap(divId)
const user = new User()
const company = new Company()

customMap.addMarker(user)
customMap.addMarker(company)