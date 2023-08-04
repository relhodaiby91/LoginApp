// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    restURL: "http://localhost",
    userManagement: "user-management",
    assetManagement: "asset-management",
    sop:"sop",
    scheduler:"scheduler",
    ruleEngine:"rule-engine",
    alertManagement:"alert-management",
    kpi:"kpis",
    systemSettings:"system-settings",
    connection:"connection-management",
    auditLog:"audit-log",
    dateFormat:"dd MMMM YYYY hh:mm a",
    criticalityLevels:['Moderate','Low','Critical','Very Critical'],
    defaultMapStatus:['Healthy','Moderate','Low','Critical','Very Critical'],
    allMapStatus: ['Disabled','Healthy','Moderate','Low','Critical','Very Critical'],
    runningSchedulerStatus:['Not Started','Running'],
    schedulerStatus: ['Not Started', 'Running', 'Running Failed', 'Canceling', 'Canceling Failed', 'Completed'
      , 'Canceled', 'Canceling Partially Failed', 'Running Partially Failed', 'Executing', 'Stopping', 'Stopping Failed',
      'Stopping Partially Failed', 'Stopped'],
    sopStatus: ['Running', 'Canceled', 'Ended'],
    travelMarkerSpeed: 30,
    polygonColor: 'white',
    domainMap: new Map<string, string>,
    typesMap: new Map<string, string>,
    setDominsMap() {
      this.domainMap.set("المجال الأساسي", "Parent Domain");
      this.domainMap.set("إدارة المياه", "Water Management");
      this.domainMap.set("تحذير الٝيضانات", "Flood Warning");
      this.domainMap.set("إنذار الحريق", "Fire Alarm");
      this.domainMap.set("إضاءة الشوارع", "Street Lighting");
      this.domainMap.set("الطاقة إدارة", "Energy Management");
      this.domainMap.set("الري الذكي", "Smart Irrigation");
      this.domainMap.set("جودة الهواء", "Air Quality");
      this.domainMap.set("تتبع المركبات", "Vehicles Tracking");
      this.domainMap.set("مركبات العمليات", "Operation Vehicles");
      this.domainMap.set("مركبات الأمن", "Security Vehicles");
      this.domainMap.set("سيارات المياه الضحلة", "Shoal Car");
      this.domainMap.set("سيارات الكنس", "Sweeper Car");
      this.domainMap.set("سيارات الأسطوانات", "Piston Car");
      this.domainMap.set("سيارات التنظيٝ", "Cleaning Car");
      this.domainMap.set("شاحنة النقل", "Tipper");
      this.domainMap.set("سيارات النقل الصغيرة", "Buggy Car");
      this.domainMap.set("سيارات رش المبيدات", "Insect Spray Car");
      this.domainMap.set("إنذار الإختراق", "Intrusion Alarm");
      this.domainMap.set("العمود الذكي", "Smart Pole");
      this.domainMap.set("تسرب المياه", "Water Leakage");
  
    },
    setTypesMap() {
      this.typesMap.set("حساس", "Sensor");
      this.typesMap.set("بوابة", "Gateway");
      this.typesMap.set("جهاز", "Asset");
      this.typesMap.set("عداد ذكي", "Smart Meter");
    },
    
    allJobTypeList: [
      { name: 'All', id: null, value: 'all' },
      { name: 'Supervised', id: 0, value: 'supervised' },
      { name: 'Unsupervised', id: 1, value: 'unsupervised' }
  
    ],
  
    jobTypeList: [
      { name: 'Supervised', id: 0, value: 'supervised' },
      { name: 'Unsupervised', id: 1, value: 'unsupervised' }
  
    ],
    jobStatusList: [
      { name: 'All', id: null },
      { name: 'Submitted ', id: 0 },
      { name: 'Collecting Data', id: 1 },
      { name: 'In Training ', id: 2 },
      { name: 'Trained ', id: 3 },
      { name: 'Active ', id: 4 },
      { name: 'Disabled ', id: 5 }
    ],
    classificationEvaluationMetricList : [
      { name: 'Accuracy', value: 'ACCURACY' },
      { name: 'F1-Score', value: 'F1_SCORE' },
      { name: 'Precision', value: 'PRECISION' },
      { name: 'Recall', value: 'RECALL' },
      { name: 'LogLoss', value: 'LOG_LOSS' },
      { name: 'AUC', value: 'AUC' }
  
    ],
   regressionEvaluationMetricList :[
      { name: 'MAE', value: 'MAE' },
      { name: 'MSE', value: 'MSE' },
      { name: 'RMSE', value: 'RMSE' }
  
    ]
  
  };
  
  /*
   * For easier debugging in development mode, you can import the following file
   * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
   *
   * This import should be commented out in production mode because it will have a negative impact
   * on performance if an error is thrown.
   */
  // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
  