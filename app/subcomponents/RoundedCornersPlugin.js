const roundedCornersPlugin = {
    id: 'roundedCorners',
    afterUpdate: function(chart) {
      chart.getDatasetMeta(0).data.forEach(function(bar) {
        const borderRadius = 10; // adjust for desired roundness
        bar.draw = function() {
          const ctx = this._chart.ctx;
          const vm = this._view;
          const left = vm.x - vm.width / 2;
          const right = vm.x + vm.width / 2;
          const top = vm.y;
          const bottom = vm.base;
  
          // Draw the rounded bar
          ctx.beginPath();
          ctx.fillStyle = vm.backgroundColor;
          ctx.strokeStyle = vm.borderColor;
          ctx.lineWidth = vm.borderWidth;
          ctx.moveTo(left, bottom);
          ctx.lineTo(left, top + borderRadius);
          ctx.quadraticCurveTo(left, top, left + borderRadius, top);
          ctx.lineTo(right - borderRadius, top);
          ctx.quadraticCurveTo(right, top, right, top + borderRadius);
          ctx.lineTo(right, bottom);
          ctx.fill();
          if (vm.borderWidth) {
            ctx.stroke();
          }
        };
      });
    }
  };
  
  ChartJS.register(roundedCornersPlugin);
  