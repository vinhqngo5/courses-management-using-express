const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const mongooseDelete = require("mongoose-delete");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CourseSchema = new Schema(
  {
    name: { type: String, maxLength: 255, required: true },
    description: { type: String, maxLength: 255 },
    image: { type: String, maxLength: 255 },
    videoID: { type: String, maxLength: 255, required: true },
    slug: { type: String, slug: "name", unique: true },
  },
  {
    timestamps: true,
  }
);
// Add plugin
mongoose.plugin(slug);
CourseSchema.plugin(mongooseDelete, {
  overrideMethods: "all",
  deletedAt: true,
});

// Add custom query helpers
CourseSchema.query.sortable = function (req) {
  if (req.query.hasOwnProperty("_sort")) {
    const isValidType = ["asc", "desc"].includes(req.query.type);
    if (isValidType) {
      return this.sort({
        [req.query.column]: req.query.type,
      });
    }
    return this;
  }
};

/**
 * về cơ bản mongoose.SchemaType là kiểu dữ liệu chỉ đó là 1 SchemaType => là kiểu dữ liệu cho schema.path
 * schema.path:  console.log(schema.path('name') instanceof mongoose.SchemaType);
 * mongoose.Schema.Types.String => thừa kế mongoose.SchemaType và thêm schemaName (vd: schemaName: "string")
 *  mongoose.Schema.Types: chứa nhiều kiểu SchemaType (string, int, ...)
 */

module.exports = mongoose.model("Course", CourseSchema);
