var getImportFileManager = require("./import-file-manager");

function LessPluginAlternativeImports(options) {
    this.setOptions(options);
}

LessPluginAlternativeImports.prototype = {

    install: function(less, pluginManager) {
        var ImportFileManager = getImportFileManager(less);
        pluginManager.addFileManager(new ImportFileManager(this.options));
    },

    setOptions: function(options) {
        this.options = this.parseOptions(options);
    },

    parseOptions: function(options) {
        var parsed_options = {};

        if (options && typeof options === "string") {
            var options_list = options.split(",");

            options_list.forEach(function (option) {
                var pair = option.split(":");

                if (pair.length === 2) {
                    parsed_options[pair[0]] = pair[1];
                }
            });
        }

        return parsed_options;
    }
};

module.exports = LessPluginAlternativeImports;