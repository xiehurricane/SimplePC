'use strict';

import React from 'react';
import { Router, Route, IndexRoute, useRouterHistory,IndexRedirect } from 'react-router';
import { createMemoryHistory,createHashHistory } from 'history';
import Login from '../controllers/MineComponent/Login/Login.jsx';
import UserInfo from '../controllers/MineComponent/UserInfo/UserInfo.jsx';
//export const history = useRouterHistory(createMemoryHistory)();
export const history = useRouterHistory(createHashHistory)();


export default function() {
    return (
        <Router onUpdate={ () => window.scrollTo(0, 0) } history={ history }>
            <Route path="/" component="div">
              <IndexRedirect to='antrm' />
              <Route path='/antrm' component={Login}>
                {/* <IndexRoute component={Index} />
                <Route path='patient/:location' component={Location} />
                <Route path='doctor/:location' component={Location}/> */}
              </Route>
              <Route path='/antrm/userInfo' component={UserInfo}/>

              {/* <Route path="/antrm/mbgl" component={SlowHome}>
                <Route path='/antrm/mbgl/compatient' component={ComPatient}/>
                <Route path='/antrm/mbgl/patientplan' component={PatientPlan}/>
                <Route path='/antrm/mbgl/patientrisk' component={PatientRisk}/>
                <Route path='/antrm/mbgl/patientvisit' component={PatientVisit}/>
                <Route path='/antrm/mbgl/patientrecordlist' component={PatientRecordList}/>//患者建档列表
                <Route path='/antrm/mbgl/patientrecord' component={PatientRecord}/>//患者建档
                <Route path='/antrm/mbgl/baselinemanagement' component={BaselineManagement}/>//基线管理
                <Route path='/antrm/mbgl/questionnaire' component={Questionnaire}/>//调查表
                <Route path='/antrm/mbgl/activity' component={Activity}/>//调查表
                <Route path='/antrm/mbgl/followupmanagement' component={FollowUpManagement}/>//调查表
                <Route path='/antrm/mbgl/comvisit' component={ComVisit}/>
                <Route path='/antrm/mbgl/patienttableview' component={PatientTableView}/>
                <Route path='/antrm/mbgl/summaryInfo' component={SummaryInfo}/>

              </Route> */}
            </Route>
        </Router>
        );
}
