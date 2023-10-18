# Section 1

## How did I go about attempting this?

I used Curl to download the certificate.
Once the certificate was downloaded I used Open SSL to printout the expiry date of the certificate

## How would I automate this in the future

- Step 1

Extend the current script to extract and format the date printed out by openSSL. Use that date and compare it to the current date to see if the Certificate is expired or not.
Once that's done, if the certificate is expired, add code to send a message to our messaging platform(slack/teams) so that we can be alerted instantly. This should be easily done with curl and slack webhooks alongside with the MS teams equivalent. If its not then do nothing - so the script will just pass when run 


- Step 2

Add a workflow to run the script on a schedule using whatever tool we prefer (Github/Jenkins/Gitlab). Once a day in the morning should be sufficient. 


## Executing the script

### Mac/Linux

- Clone the repo
- Navigate to the correct directory
- Open a terminal
- Run `./determineCertExpireDate.sh`

### Windows

- Download git bash for windows
- Clone the repo
- Navigate to the correct directory
- Open a bash terminal 
- Run `./determineCertExpireDate.sh`

```
Please note I have not worked on a Windows machine for the last 5 years nor do I have one so I was unable to test that these steps work successfully on windows
```