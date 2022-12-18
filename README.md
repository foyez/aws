# AWS (Amazon Web Service)

- It's a leading IaaS (Infrastructure as a Service) & PaaS (Platform as a Service)

## Features

### IAM

IAM best practices:
- Don't use the root account except for AWS account setup
- One physical user = One AWS user
- Assign users to groups and assing permissions to groups
- Create a strong password policy
- Use and enforce the use of Multi Factor Authentication (MFA)
- Create and use Roles for giving permissions to AWS Services
- Use Access Keys for Programmatic Access (CLI/SDK)
- Audit permissions of your account with the IAM Credential Report
- Never share IAM users & Access Keys

### EC2

**EC2** is a bare metal machine to run and whatever compute you want. It is a virtual server like, Digital Ocean Linux server.

### S3

**S3** is an object storage service. Here, each object is store as a file with its metadata and id. It enables us to upload, store and download pretty much any file or object. It's size limit is 5GB.

### Lambda

With **lambda** you can run code for virtually any type of application or backend service.

### CloudFront

**CloudFront** is a web service speeds up distribution of our static files like CDN. It delivers the static files, e.g. html, css, js etc., through a world wide network of data centers exactly like a CDN does.

### DynamoDB

**DynamoDB** is a fast NoSql database. It's a key-value and document database that delivers single-digit millisecond performance at any scale. It's a fully managed, multiregion, multimaster, durable database with built-in security, backup and restore, and in-memory caching for internet-scale applications.

