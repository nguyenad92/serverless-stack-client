export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "myphotosalbumonline.com"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://m3fl1emnx2.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_TE1rJzvUC",
    APP_CLIENT_ID: "3hlk5s0hif6rvofp8bock18cck",
    IDENTITY_POOL_ID: "us-east-1:ec5c4820-106c-46c4-8b48-134e708ebf3b"
  },
  social: {
    FB: "443263989626870"
  }
};
