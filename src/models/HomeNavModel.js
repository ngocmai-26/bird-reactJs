import { makeAutoObservable } from 'mobx'
import { AdminNav } from '../core/utils/Types'
class HomeNavModel {
  active

  links = [
    new AdminNav(1, 'Giải đấu đang diễn ra', '/TournamentList_Dang', [], []),
    new AdminNav(2, 'Giải đấu sắp diễn ra', '/TournamentList_Sap', [], []),
    new AdminNav(3, 'Giải đấu đã diễn ra', '/TournamentList_Da', [], []),
  ]

  constructor() {
    makeAutoObservable(this)
    this.setActive(this.links[0].id)
  }

  setActive = (val) => {
    console.log(val)
    this.active = val
  }
}


const homeNavModel = new HomeNavModel()
export default homeNavModel
