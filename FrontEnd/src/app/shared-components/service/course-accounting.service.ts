import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseAccountingService {

  public strTopicName$ = new BehaviorSubject<string>('');
  public strPrevLessonName$ = new BehaviorSubject<string>('');
  public strNextLessonName$ = new BehaviorSubject<string>('');
  public strTopicTitle$ = new BehaviorSubject<string>('');
  public strPrevLessonTitle$ = new BehaviorSubject<string>('');
  public strNextLessonTitle$ = new BehaviorSubject<string>('');
  public blnPrevLessonActive$ = new BehaviorSubject<boolean>(false);
  public blnNextLessonActive$ = new BehaviorSubject<boolean>(false);
  public intCurrentTopicSerial$ = new BehaviorSubject<number>(0);
  


  public courseNamesArrayAccounting = [
    { 'serial':'0', 'active':'activeMenu', 'name':'toc', 'title':'Table of Content' }, 
    { 'serial':'1', 'active':'', 'name':'BKeepFTransFEvent', 'title':'Bookeeping, Financial Transaction & Event' }, 
    { 'serial':'2', 'active':'', 'name':'RecordingAndTrack', 'title':'Recording And Tracking' }, 
    { 'serial':'3', 'active':'', 'name':'GAAP', 'title':'Gaap' }, 
    { 'serial':'4', 'active':'', 'name':'AccPrinciples', 'title':'Accounting Principles' }, 
    { 'serial':'5', 'active':'', 'name':'Assumptions', 'title':'Assumptions' }, 
    { 'serial':'6', 'active':'', 'name':'Constraints', 'title':'Constraints' }, 
    { 'serial':'7',  'active':'', 'name':'TheWordAcc', 'title':'The Word "Account"' }, 
    { 'serial':'8',  'active':'', 'name':'AccTypes', 'title':'Account Types' }, 
    { 'serial':'9',  'active':'', 'name':'ChartOfAcc', 'title':'Chart Of Accounts' }, 
    { 'serial':'10',  'active':'', 'name':'WhatIsAccounting', 'title':'What Is Accounting' }, 
    { 'serial':'11',  'active':'', 'name':'DefProcMethodSys', 'title':'Definitions Of Process, Method And System' }, 
    { 'serial':'12', 'active':'', 'name':'AccSystem', 'title':'Accounting System' }, 
    { 'serial':'13', 'active':'', 'name':'HistoryAcc', 'title':'History Of Accounting' }, 
    { 'serial':'14', 'active':'', 'name':'TyesOfAccounting', 'title':'Types Of Accounting' }, 
    { 'serial':'15', 'active':'', 'name':'CashAccrual', 'title':'Cash Vs. Accrual Basis Of Accounting' }, 
    { 'serial':'16', 'active':'', 'name':'ImpactBusinessStra', 'title':'Impact Realizing And Business Strategy' }, 
    { 'serial':'17', 'active':'', 'name':'AccCycle', 'title':'Accounting Cycle' }, 
    

    
  ];

  constructor() { }

  // getTopicName( ) {
  //   return this.strTopicName$;
  // }
  
    // setTopicName(courseName:string, topicSerial:string, topicName: string, prevLesson: string,nextLesson: string, nextLesonActive: boolean, prevLessonActive: boolean ) {
    setTopicName(courseName:string, topicSerial:string)  {
      if (courseName == 'courseNamesArrayAccounting') {
        this.intCurrentTopicSerial$.next(parseInt(topicSerial));

        this.strTopicName$.next(this.courseNamesArrayAccounting[parseInt(topicSerial)].name);
        this.strPrevLessonName$.next(this.courseNamesArrayAccounting[parseInt(topicSerial)-1].name);
        this.strNextLessonName$.next(this.courseNamesArrayAccounting[parseInt(topicSerial)+1].name);

        this.strTopicTitle$.next(this.courseNamesArrayAccounting[parseInt(topicSerial)].title);
        this.strPrevLessonTitle$.next(this.courseNamesArrayAccounting[parseInt(topicSerial)-1].title);
        this.strNextLessonTitle$.next(this.courseNamesArrayAccounting[parseInt(topicSerial)+1].title);
  
        if (parseInt(topicSerial)>0) {
          this.blnPrevLessonActive$.next(true);          
        } else {
          this.blnPrevLessonActive$.next(false);                    
        }

        if (parseInt(topicSerial) == this.courseNamesArrayAccounting.length-1) {
          this.blnNextLessonActive$.next(false);
        } else {
          this.blnNextLessonActive$.next(true);          
        }
        

      }
    }
  
  
}
