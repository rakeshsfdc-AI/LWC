public with sharing class CaseDashboardController {
   @AuraEnabled(cacheable=true)
   public static Case getCases(Id caseId){
   return [SELECT id,CaseNumber,Origin,Reason , ClosedDate,Description , Priority, Status, Subject,
                 (SELECT Id, CommentBody, CreatedDate FROM CaseComments ORDER BY CreatedDate DESC LIMIT 5),
                   (SELECT Id, Field, OldValue, NewValue, CreatedDate FROM Histories 
                    WHERE Field = 'Status' ORDER BY CreatedDate DESC LIMIT 5),
                  Type  FROM Case where Id =: caseId LIMIT 1];
   }
}