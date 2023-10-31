'use strict';


module.exports = function (pager, argv) {
  if (typeof pager != 'string') {
    argv = pager;
    pager = null;
  }

  pager = pager || process.env.PAGER;
  argv = argv || [];

  if (pager != 'less') {
    // PRs welcome.
    return false;
  }

  argv = (process.env.LESS || '').split(/\s+/).concat(argv);

  return argv.some(function (arg) {
    arg = arg.toLowerCase();
    return arg == '-r' || arg == '--raw-control-chars';
  });
};
