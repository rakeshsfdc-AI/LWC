public with sharing class getAccounts {
    @AuraEnabled(cacheable=true)
    public static  list<Account> getAccount(){
        list<Account> accounts = [SELECT Id, Name, Phone, Industry FROM Account limit 10];
        return accounts;
    }
}