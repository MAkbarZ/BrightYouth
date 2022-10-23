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
  
  private courseObj = {
    serial: '0',
    active: 'activeMenu',
    courseName: 'toc',
    title: 'Table of Content'
  }

  public courseNamesArrayAccounting = [
    { 'serial':'0', 'active':'activeMenu', 'courseName':'toc', 'title':'Table of Content' }, 
    { 'serial':'1', 'active':'', 'courseName':'BKeepFTransFEvent', 'title':'Bookeeping, Financial Transaction & Event' }, 
    { 'serial':'2', 'active':'', 'courseName':'RecordingAndTrack', 'title':'Recording And Tracking' }, 
    { 'serial':'3', 'active':'', 'courseName':'GAAP', 'title':'Gaap' }, 
    { 'serial':'4', 'active':'', 'courseName':'AccPrinciples', 'title':'Accounting Principles' }, 
    { 'serial':'5', 'active':'', 'courseName':'Assumptions', 'title':'Assumptions' }, 
    { 'serial':'6', 'active':'', 'courseName':'Constraints', 'title':'Constraints' }, 
    { 'serial':'7',  'active':'', 'courseName':'TheWordAcc', 'title':'The Word "Account"' }, 
    { 'serial':'8',  'active':'', 'courseName':'AccTypes', 'title':'Account Types' }, 
    { 'serial':'9',  'active':'', 'courseName':'ChartOfAcc', 'title':'Chart Of Accounts' }, 
    { 'serial':'10',  'active':'', 'courseName':'WhatIsAccounting', 'title':'What Is Accounting?' }, 
    { 'serial':'11',  'active':'', 'courseName':'DefProcMethodSys', 'title':'Definitions Of Process, Method And System' }, 
    { 'serial':'12', 'active':'', 'courseName':'AccSystem', 'title':'Accounting System' }, 
    { 'serial':'13', 'active':'', 'courseName':'HistoryAcc', 'title':'History Of Accounting' }, 
    { 'serial':'14', 'active':'', 'courseName':'TyesOfAccounting', 'title':'Types Of Accounting' }, 
    { 'serial':'15', 'active':'', 'courseName':'CashAccrual', 'title':'Cash Vs. Accrual Basis Of Accounting' }, 
    { 'serial':'16', 'active':'', 'courseName':'ImpactBusinessStra', 'title':'Impact Realizing And Business Strategy' }, 
    { 'serial':'17', 'active':'', 'courseName':'AccCycle', 'title':'Accounting Cycle' }, 
    

    
  ];

  constructor() { }
  
  
    setTopicName(courseName:string, topicSerial:string)  {
      if (courseName == 'courseNamesArrayAccounting') {
        this.intCurrentTopicSerial$.next(parseInt(topicSerial));
       
        this.strTopicName$.next(this.courseNamesArrayAccounting[parseInt(topicSerial)].courseName);
        this.strTopicTitle$.next(this.courseNamesArrayAccounting[parseInt(topicSerial)].title);

        if ((parseInt(topicSerial)-1)<0) {
          
        } else {
          this.strPrevLessonName$.next(this.courseNamesArrayAccounting[parseInt(topicSerial)-1].courseName);
          this.strPrevLessonTitle$.next(this.courseNamesArrayAccounting[parseInt(topicSerial)-1].title);
        }


        

        if ((parseInt(topicSerial)+1)=== this.courseNamesArrayAccounting.length) {
          
        } else {
        this.strNextLessonName$.next(this.courseNamesArrayAccounting[parseInt(topicSerial)+1].courseName);
        this.strNextLessonTitle$.next(this.courseNamesArrayAccounting[parseInt(topicSerial)+1].title);
        }
  
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
