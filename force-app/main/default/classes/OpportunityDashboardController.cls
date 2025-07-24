public with sharing class OpportunityDashboardController {
     @AuraEnabled(cacheable=true)
    public static Opportunity getOpportunityData(Id oppId) {
        return [
            SELECT Id, Name, StageName, Amount, CloseDate,
                (SELECT Contact.Id, Contact.Name, Role FROM OpportunityContactRoles),
                (SELECT Subject, ActivityDate, Status FROM ActivityHistories ORDER BY ActivityDate DESC LIMIT 5)
            FROM Opportunity
            WHERE Id = :oppId
            LIMIT 1
        ];
    }
}