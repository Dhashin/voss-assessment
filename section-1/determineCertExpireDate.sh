curl https://www.ultimateqa.com -w "%{certs}" -o /dev/null > cert
openssl x509 -enddate -noout -in cert