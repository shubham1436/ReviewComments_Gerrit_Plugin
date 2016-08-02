include_defs('//bucklets/gerrit_plugin.bucklet')

gerrit_plugin(
  name = 'reviewcomments',
  srcs = glob(['src/main/java/**/*.java']),
  resources = glob(['src/main/**/*']),
  manifest_entries = [
    'Gerrit-PluginName: reviewcomments',
    'Gerrit-ApiType: plugin',
    'Gerrit-ApiVersion: 2.12-SNAPSHOT',
    'Gerrit-HttpModule: com.googlesource.gerrit.plugins.reviewcomments.HttpModule',
  ],
)

# this is required for bucklets/tools/eclipse/project.py to work
java_library(
  name = 'classpath',
  deps = [':reviewcomments__plugin'],
)

