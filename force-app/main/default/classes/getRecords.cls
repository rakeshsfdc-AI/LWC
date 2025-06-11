public with sharing class getRecords {
    @AuraEnabled(cacheable=true)
    public static list<Case> methodName(string inputval){
        // Query to fetch all Case records
        List<Case> caseRecords = [SELECT Id, Subject, Status,Priority FROM Case where status =: inputval limit 10];
        
        // Return the list of Case records
        return caseRecords;

    }
}