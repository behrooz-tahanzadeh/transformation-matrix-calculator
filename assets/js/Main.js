var Main = 
{
	onAddClick: function()
	{
		var s = jQuery("select").val();
		var o = jQuery("#sampleArea>div."+s);
		
		jQuery("#calculationArea").append(o.clone());
	},
	
	onRunClick: function()
	{
		var o = jQuery("#calculationArea>div");
		var m = new THREE.Matrix4();
		 
		for(var i=0; i<o.length; ++i)
		{
			e = o.eq(i);
			
			if(e.hasClass("rotationX"))
			{
				var a = e.find("input").val();
				a = a*(Math.PI/180);
				
				var t = new THREE.Matrix4();
				t.makeRotationX(a);
				
				m = m.multiply(t)
			}
			else if(e.hasClass("rotationY"))
			{
				var a = e.find("input").val();
				a = a*(Math.PI/180);
				
				var t = new THREE.Matrix4();
				t.makeRotationY(a);
				
				m = m.multiply(t)
			}
			else if(e.hasClass("rotationZ"))
			{
				var a = e.find("input").val();
				a = a*(Math.PI/180);
				
				var t = new THREE.Matrix4();
				t.makeRotationZ(a);
				
				m = m.multiply(t)
			}
			else if(e.hasClass("translate"))
			{
				var a = e.find("input");
				
				var v = new THREE.Vector3(a.eq(0).val(), a.eq(1).val(), a.eq(2).val());
				
				var t = new THREE.Matrix4();
				t.setPosition(v);
				
				m = m.multiply(t)
			}
			else if(e.hasClass("inverse"))
			{
				m.getInverse(m)
			}
		}
		
		m = m.transpose();
		
		for(var i=0; i<m.elements.length; ++i)
			m.elements[i] = Math.round(m.elements[i]*1000000000)/1000000000
		
		jQuery("#resultArea").html(m.elements.toString());
	}
};
