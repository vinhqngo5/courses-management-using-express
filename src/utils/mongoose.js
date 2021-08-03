module.exports = {
  /**
   * mongoose documents object may have some different like the security problem
   * => convert it to plain js object
   * @param {*} mongooses 
   * @returns 
   */
  multipleMongooseToObject: (mongooses) => {
    return mongooses.map((mongoose) => mongoose.toObject());
  },
  mongooseToObject: (mongoose) => {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};
