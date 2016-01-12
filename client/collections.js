Sets = new Mongo.Collection("sets");
Cards = new Mongo.Collection("cards");

Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: "~/uploads"})]
});