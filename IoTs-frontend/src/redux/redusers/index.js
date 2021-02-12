import {combineReducers} from 'redux';

import flashMessageReduser from './flashMessageReduser';
import frontReduser from './forntReduser';
import projectDataReduser from './projectDataReduser';
import userDataReduser from './userDataReduser';

const rootReduser = combineReducers({
    flashMessage: flashMessageReduser,
    front: frontReduser,
    projectdata: projectDataReduser,
    userdata: userDataReduser
});

export default rootReduser

