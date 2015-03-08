module.exports = function(less) {
    var FileManager = less.FileManager;

    function ParamFileManager(options) {
        this.options = options;
    }

    ParamFileManager.prototype = new FileManager();

    ParamFileManager.prototype.loadFile = function(filename, currentDirectory, options, environment) {
        var filename_parts = filename.split(".");
        var original_filename = filename;

        for (var key in this.options) {
            if (filename_parts[0] == key) {
                filename = filename_parts[0] + "_" + this.options[key] + "." + filename_parts[1]
            }
        }

        // Check if file exist
        var result = FileManager.prototype.loadFileSync.call(this, filename, "", options, environment);

        if ('error' in result) {
            return FileManager.prototype.loadFile.call(this, original_filename, "", options, environment);
        } else {
            return FileManager.prototype.loadFile.call(this, filename, "", options, environment);
        }
    };

    return ParamFileManager;
};